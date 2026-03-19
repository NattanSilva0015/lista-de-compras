function Button(props) {
    return (
      <button {...props} className="bg-[#4f46e5] p-2 rounded-md text-white">
        {props.children}
      </button>
    );
}

export default Button;