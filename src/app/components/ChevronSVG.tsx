
type Direction = 'left' | 'right' | 'up';
type Size = 8 | 11 | 14
type Color = 'red'

const ChevronSVG = (
    { direction, color, size }:
        { direction: Direction, color?: Color, size?: Size }) => {

    const chevrons = {
        left: "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",
        right: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
        up: 'M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z',
        down: 'M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
    }
    const sizes = { 8: 'w-8 h-8', 11: 'w-11 h-11', 14: 'w-14 h-14' }
    const colors = { 'red': 'text-[#CC4356] stroke-[#CC4356]' }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-${size ? sizes[size] : 'w-6 h-6'}
                    ${color && ` ${colors[color]}`}`}>
            <path fillRule="inherit" d={chevrons[direction]} clipRule="evenodd" />
        </svg>
    )
}
export default ChevronSVG