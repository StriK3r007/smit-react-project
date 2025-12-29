import DrawerSidebar from "../components/DrawerSidebar";

export default function Dashboard({firstName, lastName}) {
    return (
        <section className="w-full">
            <DrawerSidebar firstName={firstName} lastName={lastName} />
        </section>
    )
}