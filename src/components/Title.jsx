function Title(props) {
    return (
      <h1
        {...props}
        className="text-3xl text-[#4f46e5] font-bold text-center rounded-md"
      >
        {props.children}
      </h1>
    );
}


export default Title;