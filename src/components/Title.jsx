function Title(props) {
    return <h1 {...props} className="text-3xl text-slate-50 font-bold text-center bg-red-500 rounded-md">{props.children}</h1>;
}


export default Title;