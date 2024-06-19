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
import { Box, Typography } from '@strapi/design-system';

let packageJson = {};
let appInfo = {};

try {
  packageJson = require('../../../../../../../package.json');
} catch (error) {
  console.error('package.json not found', error);
}

try {
  appInfo = require('../../../../../../../app-info.json');
} catch (error) {
  console.error('app-info.json not found', error);
}

const HomePage = () => {
  return (
    <Layout>
      <SettingsPageTitle name="App Info" />
      <Main>
        <HeaderLayout title="App Info" subtitle="" />
      </Main>
      <ContentLayout>
        <EmptyStateLayout icon={<div />} content={`App version ${packageJson.version || '---'}`} />
        <Box padding={4} background="neutral100" hasRadius>
          {Object.keys(appInfo).length > 0 ? (
            Object.keys(appInfo).map((key) => (
              <Box key={key} paddingBottom={2}>
                <Typography variant="beta">{key}:</Typography>
                <Typography>{appInfo[key]}</Typography>
              </Box>
            ))
          ) : (
            <Typography>No app information available</Typography>
          )}
        </Box>
      </ContentLayout>
    </Layout>
  );
};

export default memo(HomePage);
