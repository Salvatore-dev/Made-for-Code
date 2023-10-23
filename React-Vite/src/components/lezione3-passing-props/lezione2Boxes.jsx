function Box({ w, h, bg }) {
    return (
      <section
        className="bg-blue-300 p-4"
        style={{
          width: (w ?? 400) + 'px',
          height: h + 'px',
          backgroundColor: bg,
        }}
      >
        Box
      </section>
    );
  }
  
  export default Box;