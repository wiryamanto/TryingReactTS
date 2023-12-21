// import React from 'react'


// Cara pertama menggunakan props
// export default function Button({
//     backgroundColor,
//     fontSize,
//     pillShape
// }: {
//     backgroundColor:string;
//     fontSize: number;
//     pillShape: boolean
// }) {
//   return (
//     <button className="bg-blue-500 text-white rounded px-4 py-2 text-2xl">
//         Click me
//     </button>
//   )
// }

//   Cara kedua membuat props
// type Color = "red" | "blue" | "green" | "yellow" | "purple"

// type ButtonProps = {
//     backgroundColor: Color;
//     textColor: Color;
//     fontSize: number
//     pillShape?: boolean
//     padding: [number, number, number, number]
// }
// export default function Button({
//     backgroundColor,
//     fontSize,
//     pillShape,
//     textColor,
//     padding,
// }: ButtonProps) {
//   return (
//     <button className="bg-blue-500 text-white rounded px-4 py-2 text-2xl">
//         Click me
//     </button>
//   )
// }

// cara simple membuat props
type ButtonProps = {
    // style : {
    //     backgroundColor : string;
    //     fontSize: number;
    //     textColor: string;
    // };
    style: React.CSSProperties;
}; 

export default function Button ({ style }: ButtonProps){
    return <button style={style}>Click me</button>
}
// type ButtonProps = {
//     style: {
//         bacgroundColor: string;
//         fontSize: number;
//         textColor: string;
//     }
// }

// export default function Button({
//     style
// }: ButtonProps) {
//     return (
//         <button style={style}>
//             Click Me
//         </button>
//     )
// }

// import {useState } from 'react'

// type User = {
//     name: string;
//     age: number;
// }

// export default function Button() {
//     const [count, setCount] = useState (0)
//     const [text, setText] = useState("Click Me!")
//     const [isPrimary, setIsPrimary] = useState(true)
//     const [user, setUser] = useState<User | null>(null)

//     const name = user?.name;

//     return <button>Click Me!</button>

// }

