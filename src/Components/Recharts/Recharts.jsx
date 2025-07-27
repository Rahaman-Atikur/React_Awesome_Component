import React from 'react';
import { LineChart } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

const Recharts = () => {
    return (
        <div>
            <LineChart width={500} height={200} ></LineChart>
            <LineChart width={600} height={300} data={data}>
                <Line dataKey="uv" />
            </LineChart>
        </div>
    );
};

export default Recharts;