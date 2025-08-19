

export default function User({ user }) {
    const { avatar_url, followers
        , following
        , publice_repos
        , url
    } = user;

    return <div className="user">
        <div>
            <img src={avatar_url} className="avatar" alt='User'/>
        </div>
    </div>
}