import React from 'react';
import ReactApexCharts from 'react-apexcharts';

import bulba from '../../assets/images/bulba.png';

import {
    Wrapper,
    Container,
    TopSide,
    BottomSide,
    Geral,
    Abilities,
    Profile,
} from './styles';

function Info() {
    const grafico = {
        series: [
            {
                name: 'points',
                data: [80, 50, 30, 40, 100, 20],
            },
        ],
        options: {
            chart: {
                toolbar: { tools: { download: false } },
            },
            xaxis: {
                categories: [
                    'HP',
                    'attack',
                    'Speed',
                    'Defense',
                    'ATK_speed',
                    'DFS_speed',
                ],
            },
        },
    };

    return (
        <Wrapper>
            <Container>
                <TopSide>
                    <Geral>
                        <h1>Bulbasauro</h1>
                        <img src={bulba} alt="bulbasauro" />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Provident architecto, dolor perspiciatis
                            impedit ipsum incidunt ad deleniti eaque unde in
                            labore exercitationem dolorum, tempore corporis
                            temporibus ducimus! Tempora, sequi? Ex.
                        </p>
                    </Geral>
                    <Abilities>
                        <h1>Abilities</h1>
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
                                <li>Lorem ipsum,</li>
                                <li>Lorem ipsum,</li>
                                <li>Lorem ipsum,</li>
                                <li>Lorem ipsum,</li>
                            </ul>
                            <ul>
                                <li>Lorem ipsum,</li>
                                <li>Lorem ipsum,</li>
                                <li>Lorem ipsum,</li>
                                <li>Lorem ipsum,</li>
                            </ul>
                        </div>
                    </Profile>
                </BottomSide>
            </Container>
        </Wrapper>
    );
}

export default Info;
