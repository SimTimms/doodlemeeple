import React from 'react';
import {
  FieldBox,
  DMCard,
  Row,
  Column,
  RoleObject,
} from '../../../../../components';
import GallerySection from '../components/section/gallerySection';
import SectionList from '../../../../../components/buttons/addSection';
import AvatarComponent from './avatar';
import FeatureComponent from './feature';

export function preference(props) {
  const { profile, setProfile, SignupMutation } = props;

  return (
    <RoleObject
      profile={profile}
      setProfile={setProfile}
      SignupMutation={SignupMutation}
    />
  );
}

export function summary(props) {
  const { profile, setProfile, autosave, SignupMutation } = props;

  return (
    <FieldBox
      value={profile.summary}
      title="Summary"
      maxLength={256}
      onChangeEvent={(e) => {
        setProfile({ ...profile, summary: e });
        autosave(SignupMutation, 'Summary');
      }}
      replaceMode="loose"
      placeholder="Example: Digital artist with 12 years experience..."
      info="Coming Soon"
      warning=""
      size="s"
      multiline={true}
    />
  );
}

export function feature(props) {
  const { profile, setProfile, autosave, SignupMutation } = props;

  return (
    <Column>
      <FeatureComponent
        profile={profile}
        setProfile={setProfile}
        autosave={autosave}
        SignupMutation={SignupMutation}
      />
    </Column>
  );
}

export function avatar(props) {
  const { profile, setProfile, autosave, SignupMutation } = props;

  return (
    <Column>
      <AvatarComponent
        profile={profile}
        setProfile={setProfile}
        autosave={autosave}
        SignupMutation={SignupMutation}
      />
    </Column>
  );
}

export function social(props) {
  const { profile, setProfile, autosave, SignupMutation } = props;
  return (
    <DMCard>
      <div style={{ padding: 10 }}>
        <Row mb={10}>
          <FieldBox
            value={profile.facebook}
            title="Facebook"
            maxLength={256}
            onChangeEvent={(e) => {
              setProfile({ ...profile, facebook: e });
              autosave(SignupMutation, 'facebook');
            }}
            replaceMode="loose"
            placeholder=""
            info=""
            warning=""
            size="s"
            icon={social.socialFacebook}
          />
        </Row>
        <Row mb={10}>
          <FieldBox
            value={profile.twitter}
            title="Twitter"
            maxLength={256}
            onChangeEvent={(e) => {
              setProfile({ ...profile, twitter: e });
              autosave(SignupMutation, 'twitter');
            }}
            replaceMode="loose"
            placeholder=""
            info=""
            warning=""
            size="s"
            icon={social.socialTwitter}
          />
        </Row>
        <Row mb={10}>
          <FieldBox
            value={profile.instagram}
            title="Instagram"
            maxLength={256}
            onChangeEvent={(e) => {
              setProfile({ ...profile, instagram: e });
              autosave(SignupMutation, 'instagram');
            }}
            replaceMode="loose"
            placeholder=""
            info=""
            warning=""
            size="s"
            icon={social.socialInstagram}
          />
        </Row>
        <Row mb={10}>
          <FieldBox
            value={profile.linkedIn}
            title="LinkedIn"
            maxLength={256}
            onChangeEvent={(e) => {
              setProfile({ ...profile, linkedIn: e });
              autosave(SignupMutation, 'linkedIn');
            }}
            replaceMode="loose"
            placeholder=""
            info=""
            warning=""
            size="s"
            icon={social.socialLinkedIn}
          />
        </Row>
      </div>
    </DMCard>
  );
}

export function contact(props) {
  const { profile, setProfile, autosave, SignupMutation } = props;
  return (
    <DMCard>
      <div style={{ padding: 10 }}>
        <Row mb={10}>
          <FieldBox
            value={profile.publicEmail}
            title="Public Email"
            maxLength={256}
            onChangeEvent={(e) => {
              setProfile({ ...profile, publicEmail: e });
              autosave(SignupMutation, 'publicEmail');
            }}
            replaceMode="loose"
            placeholder=""
            info=""
            warning=""
            size="s"
            icon={social.iconEmail}
          />
        </Row>
        <Row mb={10}>
          <FieldBox
            value={profile.website}
            title="Website"
            maxLength={256}
            onChangeEvent={(e) => {
              setProfile({ ...profile, website: e });
              autosave(SignupMutation, 'website');
            }}
            replaceMode="loose"
            placeholder=""
            info=""
            warning=""
            size="s"
            icon={social.iconWebsite}
          />
        </Row>
        <Row mb={10}>
          <FieldBox
            value={profile.skype}
            title="Skype"
            maxLength={256}
            onChangeEvent={(e) => {
              setProfile({ ...profile, skype: e });
              autosave(SignupMutation, 'skype');
            }}
            replaceMode="loose"
            placeholder=""
            info=""
            warning=""
            size="s"
            icon={social.socialSkype}
          />
        </Row>
      </div>
    </DMCard>
  );
}

export function skill(props) {
  const { sections, setSections, display, setDisplay } = props;

  return (
    <DMCard>
      <div style={{ padding: 10 }}>
        {sections.length === 0 && (
          <SectionList
            display={display}
            setDisplay={setDisplay}
            setSections={setSections}
            sections={sections}
            userType={'both'}
          />
        )}
        {sections &&
          sections.map((section, index) => (
            <GallerySection
              key={`section_${index}`}
              index={index}
              sections={sections}
              setSections={setSections}
              section={section}
              autosaveIsOn={true}
              setChanges={() => {
                return null;
              }}
            />
          ))}
      </div>
    </DMCard>
  );
}
