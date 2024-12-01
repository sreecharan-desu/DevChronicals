type HeadingProps = {
    text : string
}

export default function Heading({ text }: HeadingProps) {
    return (
      <>
        <div className="text-2xl lg:text-4xl font-extrabold mt-2 -ml-1 lg:mt-0 ">
            {text}
        </div>
      </>
    );
}