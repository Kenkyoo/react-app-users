const Card = ({name, phone, email, picture, age, gender, city, country}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              height={100}
              width={200}
              className="object-cover rounded"
              src={picture}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <span>{gender}</span> <span>{age} years old</span>
            <p>{email} {phone}</p>
            <p>{city} {country}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    )
}

export default Card;