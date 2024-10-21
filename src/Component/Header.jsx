import profile from '../images/profile.png'

const Header = () => {
    return(
        <header className='md:flex items-center justify-between max-w-7xl mx-auto w-11/12 py-8 border-b-2'>
            <h1 className='text-[40px] font-bold leading-[160%] '>Knowledge Cafe</h1>
            <img src={profile} alt="Profile icon" className='w-14 h-14' />
        </header>
    )
}
export default Header;