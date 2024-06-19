/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import { SettingsPageTitle } from '@strapi/helper-plugin';
import { HeaderLayout, Layout, ContentLayout } from '@strapi/design-system/Layout';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';
import { Main } from '@strapi/design-system/Main';
import packageJson from '../../../../../../../package.json';
import appInfo from '../../../../../../../app-info.json';

const HomePage = () => {
  return (
    <Layout>
      <SettingsPageTitle name="App Information" />
      <Main>
        <HeaderLayout title="App Information" subtitle="" />
      </Main>
      <ContentLayout>
        <EmptyStateLayout icon={<div />} content={`App version ${packageJson.version || '---'}`} />
        <Box padding={4} background="neutral100" hasRadius>
          {Object.keys(appInfo).map((key) => (
            <Box key={key} paddingBottom={2}>
              <Typography variant="beta">{key}:</Typography>
              <Typography>{appInfo[key]}</Typography>
            </Box>
          ))}
        </Box>
      </ContentLayout>
    </Layout>
  );
};

export default memo(HomePage);
