import Stat from "../components/Stat";
import Header from "../components/Header";

export default function Home({user, firstName, lastName, loading}) {
    return (
        <>
        <Header user={user} firstName={firstName} lastName={lastName} loading={loading}/>
        <section className="w-full max-w-300 mx-auto p-4 text-center">
            Home Page
        </section>
        </>
    )
}