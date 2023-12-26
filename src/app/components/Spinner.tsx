type Color = 'white' | 'black'
type Size = 'M' | 'L'
const Spinner = ({ color, size }: { color?: Color, size?: Size }) => {
    let textColor = 'text-white'
    let width = 'w-[4vw]'
    let strokeColor = 'currentColor'
    let fillColor = 'currentColor'
    if (color === 'black') textColor = 'text-black'
    if (size === 'L') width = 'w-[5vw]'

    return (
        <svg className={`animate-spin ${textColor} ${width}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke={strokeColor} strokeWidth="4"></circle>
            <path className="opacity-75" fill={fillColor} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    )
}
export default Spinner
