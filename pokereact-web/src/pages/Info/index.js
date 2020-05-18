import ReactApexCharts from 'react-apexcharts';
import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {
    Wrapper,
    Container,
    TopSide,
    BottomSide,
    Geral,
    Abilities,
    Profile,
} from './styles';

function Info({ match }) {
    const pokemon = decodeURIComponent(match.params.pokemon);
    const [info, setInfo] = useState([]);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [speed, setSpeed] = useState(0);
    const [specialDefense, setSpecialDefense] = useState(0);
    const [specialAttack, setSpecialAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [attack, setAttack] = useState(0);
    const [hp, setHp] = useState(0);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [catchRate, setCatchRate] = useState(0);
    const [genderRatioFemale, setGenderRatioFemale] = useState(0);
    const [, setGenderRatioMale] = useState(0);
    const [eggGroups, setEggGroups] = useState('');
    const [hatchSteps, setHatchSteps] = useState(0);
    const [abilities, setAbilities] = useState('');
    const [evs, setEvs] = useState('');

    useEffect(() => {
        async function loadInfo() {
            const response = await api.get(`/pokemon/${pokemon}`);
            setInfo(response.data);
            setImage(response.data.sprites.front_default);
            response.data.stats.map((stat) => {
                switch (stat.stat.name) {
                    case 'hp':
                        setHp(stat.base_stat);
                        break;
                    case 'attack':
                        setAttack(stat.base_stat);
                        break;
                    case 'defense':
                        setDefense(stat.base_stat);
                        break;
                    case 'speed':
                        setSpeed(stat.base_stat);
                        break;
                    case 'special-attack':
                        setSpecialAttack(stat.base_stat);
                        break;
                    case 'special-defense':
                        setSpecialDefense(stat.base_stat);
                        break;
                    default:
                        break;
                }
                return null;
            });
            setWeight(`${response.data.weight / 1000} Kg`);
            setHeight(`${response.data.height / 10} m`);

            const EVS = response.data.stats
                .filter((stat) => {
                    if (stat.effort > 0) {
                        return true;
                    }
                    return false;
                })
                .map((stat) => {
                    return `${stat.effort} ${stat.stat.name
                        .toLowerCase()
                        .split('-')
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}`;
                })
                .join(', ');
            setEvs(EVS);
            const abt = response.data.abilities
                .map((ability) => {
                    return ability.ability.name
                        .toLowerCase()
                        .split('-')
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ');
                })
                .join(', ');
            setAbilities(abt);
        }
        loadInfo();
    }, [pokemon]);

    useEffect(() => {
        async function loadAbout() {
            const about = await api.get(`/pokemon-species/${pokemon}`);
            setDescription(about.data.flavor_text_entries[1].flavor_text);
            const femaleRate = about.data.gender_rate;
            setGenderRatioFemale(12.5 * femaleRate);
            setGenderRatioMale(12.5 * (8 - femaleRate));
            setCatchRate(Math.round((100 / 255) * about.data.capture_rate));
            setHatchSteps(255 * (about.data.hatch_counter + 1));
            const eggs = about.data.egg_groups
                .map((group) => {
                    return group.name
                        .toLowerCase()
                        .split(' ')
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ');
                })
                .join(', ');
            setEggGroups(eggs);
        }
        loadAbout();
    }, [pokemon]);
    const grafico = {
        series: [
            {
                name: 'points',
                data: [
                    speed,
                    specialDefense,
                    specialAttack,
                    defense,
                    attack,
                    hp,
                ],
            },
        ],
        options: {
            chart: {
                toolbar: { tools: { download: false } },
            },
            xaxis: {
                categories: [
                    'speed',
                    'special def',
                    'special atk',
                    'defense',
                    'attack',
                    'hp',
                ],
            },
        },
    };

    return (
        <Wrapper>
            <Container>
                <TopSide>
                    <Geral>
                        <h1>{info.name}</h1>
                        <img src={image} alt={info.name} />
                        <p>{description}</p>
                    </Geral>
                    <Abilities>
                        <ReactApexCharts
                            options={grafico.options}
                            series={grafico.series}
                            type="radar"
                            width={450}
                            height={315}
                        />
                    </Abilities>
                </TopSide>
                <BottomSide>
                    <Profile>
                        <h1> Profile</h1>
                        <div>
                            <ul>
                                <li>Height: {height} </li>
                                <li>Weight: {weight} </li>
                                <li>Catch Rate: {`${catchRate} %`} </li>
                                <li>
                                    Gender Ratio:
                                    <progress
                                        value={genderRatioFemale}
                                        max="100"
                                    />
                                </li>
                            </ul>
                            <ul>
                                <li>Eggs Groups: {eggGroups} </li>
                                <li>Abilities: {abilities} </li>
                                <li>EVs: {evs} </li>
                                <li>Hatch Steps: {hatchSteps} </li>
                            </ul>
                        </div>
                    </Profile>
                </BottomSide>
            </Container>
        </Wrapper>
    );
}

export default Info;
