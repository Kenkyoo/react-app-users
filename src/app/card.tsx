const Card = ({name, phone, email, picture}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={picture}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{email}</p>
    <p>{phone}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    )
}

export default Card;