export default async function About() {

    return (
        <>
        <div>About</div>
        <div>
            <form action="/page1/params" method="get">
            <input type="text" value="lverdi" name="username" readOnly />
            <button type="submit">Send</button>
            </form>
        </div>
        </>
    );
}
  