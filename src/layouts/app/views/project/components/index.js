import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

export function ProjectHeader({ bgImage, profile }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
        height: 300,
        padding: 10,
      }}
    >
      <div>
        <CardMedia
          component="img"
          alt="Profile Photo"
          height="140"
          image={profile.profileImg}
          title="Profile Photo"
          style={{
            borderRadius: '50%',
            border: '10px solid #fff',
            marginBottom: -50,
          }}
        />
      </div>
    </div>
  );
}
export function CardHeader({ title }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
    </div>
  );
}

export function ProfileHeader({ title, user }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography gutterBottom variant="h5" component="h2">
        {title} <span style={{ color: '#aaa' }}>by {user}</span>
      </Typography>
    </div>
  );
}
