import { Div, P, Title } from "./views.styled";
// const Photo = ({ src, alt }) => {
//     return <img src={src} alt={alt} />;
// }
const HomeView = () => {
    return (
        <main>
            <Div>
                <Title>PHONEBOOK</Title>
                <P>You may lose your memory but this secure contact book will stay forever! Let`s go...</P>
            </Div>
        </main>
    )
}
export default HomeView;