import React from 'react';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { FormInput } from '../../../../components/form';
import { CardHeader } from '../../../../components/headers';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import { SelectTagsWidget } from '../../../../components/tags';
import { MediaGallery } from '../../../../components/mediaGallery';
import { FileGallery } from '../../../../components/fileGallery';
import { Link } from 'react-router-dom';
import ActionButton from '../../../../components/buttons';

export function CreateRole({ gameId }) {
  const classes = useStyles();
  const roleIdTemp = 'ROLE123';
  const [roleName, setRoleName] = React.useState('');
  const [roleSummary, setRoleSummary] = React.useState(null);
  const [roleTags, setRoleTags] = React.useState([]);
  const [keywordTags, setKeywordTags] = React.useState([]);
  const [sketches, setSketches] = React.useState([]);
  const [files, setFiles] = React.useState([]);

  const [jobTags, setJobTags] = React.useState([
    { selected: false, name: 'Graphic Artist' },
    { selected: false, name: 'Digital Artist' },
    { selected: false, name: 'Play Tester' },
    { selected: false, name: 'Reviewer' },
    { selected: false, name: 'Distributor' },
  ]);
  const [keywords, setKeywords] = React.useState([
    { selected: false, name: 'Fantasy' },
    { selected: false, name: 'Sci-Fi' },
    { selected: false, name: 'Cards' },
    { selected: false, name: 'Board Game' },
  ]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" color="textPrimary">
            Create a Role for {gameId}
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <CardHeader title="Role Details" />
          <FormInput
            fieldName={'roleName'}
            fieldTitle={'Role Name'}
            fieldValue={roleName}
            setFieldValue={setRoleName}
            style={{ width: '100%' }}
          />
        </CardContent>
        <Divider />
        <CardContent>
          <CardHeader title="Creative" />
          <SelectTagsWidget
            tags={jobTags}
            fieldTags={roleTags}
            setTags={setJobTags}
            setFieldTags={setRoleTags}
          />
        </CardContent>
        <Divider />
        <CardContent>
          <CardHeader title="Keywords" />
          <SelectTagsWidget
            tags={keywords}
            fieldTags={keywordTags}
            setTags={setKeywords}
            setFieldTags={setKeywordTags}
          />
        </CardContent>
        <Divider />
        <CardContent>
          <Typography color="textPrimary" gutterBottom>
            {roleTags.map((item, index) => {
              const prefix =
                index === 0 ? "You're looking for a" : index > 0 ? ' and ' : '';
              return `${prefix} ${item}`;
            })}

            {keywordTags.map((item, index) => {
              const prefix =
                index === 0 ? ` with a focus on ` : index > 0 ? ', ' : '';
              return `${prefix} ${item}`;
            })}
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <CardHeader title="About the Role" />
          <FormInput
            fieldName={'roleSummary'}
            fieldTitle={'About the Role'}
            fieldValue={roleSummary}
            setFieldValue={setRoleSummary}
            style={{ width: '100%' }}
          />
        </CardContent>
        <Divider />
        <CardContent>
          <CardHeader title="Gallery" />
          <MediaGallery
            items={sketches}
            sketches={sketches}
            setSketches={setSketches}
            edit={true}
          />
        </CardContent>
        <Divider />
        <CardContent>
          <CardHeader title="Files" />
          <FileGallery
            items={files}
            setFiles={setFiles}
            files={files}
            edit={true}
          />
        </CardContent>
        <Divider style={{ margin: '10px 0 0 0' }} />
        <CardContent
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Link to={`/roles/invites/${roleIdTemp}`}>
            <ActionButton name={`Save & Continue`} />
          </Link>
        </CardContent>
      </Card>
    </Slide>
  );
}
