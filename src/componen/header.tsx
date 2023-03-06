type props ={
    name: string
    age: number;
}



export const Header = ({name, age}: props) => {
    return (
        <header>
       <h1>algum título interessante</h1>
        </header>
    )
}
