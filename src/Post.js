import React from "react"
import PropTypes from "prop-types"


function Post({ id, title }) {
    <div className="Post">
        asdssadsaddsa
        <div className="Post__title">{title}</div>
        <img className="Post__image" src={`https://source.unsplash.com/random?sig=${id}`} />
    </div>
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Post