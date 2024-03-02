function Card() {
  return (
    <div className="col-md-4 mt-4">
      <div className="card h-100">
        <img src="/zod.svg" alt="..." className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">Title</h2>
          <div className="card-text">text</div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <>
      <h1 className="text-center text-white bg-dark-subtle  my-4 mt-lg-5  ">
        Portfolio
      </h1>
      <div className="container">
        <div className="row">
          <Card />
        </div>
      </div>
    </>
  );
}
