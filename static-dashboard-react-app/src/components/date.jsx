
export default function DateToday() {
    const date = new Date().toLocaleDateString();

    return (
        <p>{date}</p>
    );
}