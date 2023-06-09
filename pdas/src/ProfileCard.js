function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media_content">
          <p className='title is_4'>Title is {title}</p>
          <p className='subtitle is_6'>Handle is {handle}</p>
        </div>

        <div className='content'>
            {description}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
