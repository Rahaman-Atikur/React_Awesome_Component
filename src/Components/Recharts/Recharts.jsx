import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const studentData = [
    {
        "student_name": "John Doe",
        "physics_marks": 85,
        "chemistry_marks": 90,
        "math_marks": 78
    },
    {
        "student_name": "Alice Smith",
        "physics_marks": 92,
        "chemistry_marks": 88,
        "math_marks": 95
    },
    {
        "student_name": "Ravi Kumar",
        "physics_marks": 76,
        "chemistry_marks": 81,
        "math_marks": 69
    }
]
const Recharts = () => {
    return (
        <div>
            <BarChart width={730} height={250} data={studentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="student_name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="physics_marks" fill="#8884d8" />
                <Bar dataKey="math_marks" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};
export default Recharts;