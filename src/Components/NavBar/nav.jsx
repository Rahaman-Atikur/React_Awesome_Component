export default function Nav({ route }) {
    return (
        <div>
            <ul className="mr-5">
                {route.label}
            </ul>
           
        </div>
    )
}