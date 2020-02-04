---
id: apis
title: API Overview
sidebar_label: API Overview
---

# APIs

## GHE Api

**Location:** `shared/apis/ghe`

**Use cases:** Create a pull request in GHE given a list of changes.

!!! note
Your component needs to be wrapped with `withGheAuth()` Higher Order Component to use the GHE Client.

    It also makes sense to provide some limitations on the usage of `createPullRequest`, i.e. don't allow users to create PRs unless there is actual changes to the content.

**Example:**

```javascript
import React, { FC } from "react";

// Import the GheApi type declaration
import { GheApi } from "shared/apis/ghe";
// Import the Ghe HOC needed
import { withGheAuth } from "shared/auth/GheComposable";

// Props for this component.
type Props = {
  // Provided by the HOC
  gheApi: GheApi
};

// Functional component example
const MyComponent: FC<Props> = ({ gheApi }) => {
  const handleCreatePullRequest = async () => {
    // Create a PR - taking care of creating a branch and
    // commit automatically - with a list of changes
    const pr = await gheApi.createPullRequest({
      org: "tools",
      repo: "test-repo",
      title: "Add new awesomeness!",
      body: "I am creating this PR programmatically",
      changes: [
        {
          path: "src/public/test.txt",
          content: "Hello World!"
        }
      ]
    });

    // We return the entire response, but document a few useful parts.
    // See PullRequestResponse for more information.
    console.log(`The url to the newly created PR: ${pr.html_url}`);
  };

  return <Button onClick={handleCreatePullRequest}>Create PR</Button>;
};

// Wrap your component in a HOC that makes sure that the user is
// signed in to Ghe (and prompts the user to do so if not).
export default withGheAuth()(MyComponent);
```

For more information see the complete API documentation [here](https://backstage.spotify.net/docs/backstage-frontend/api-references/gheApiToken/)

## User API

**Location:** `shared/apis/user`

**Use cases:** Get information about the logged in user

!!! note
There is also an Higher Order Component that can be used for class based components:

    `export default withUser(MyComponent);`

**Example:**

```javascript
import React, { FC } from "react";
import Link from "shared/components/Link";

// Import the provided hook
import { useUser } from "shared/apis/user";

// Functional component example
const MyComponent: FC<{}> = () => {
  // This hook returns a <User> object that contains
  // id (username), email and givenName.
  const { givenName, email } = useUser();

  return <Link to={`mailto:${email}`}>Contact {givenName}</Link>;
};
```

For more information see the complete API documentation [here](https://backstage.spotify.net/docs/backstage-frontend/api-references/userApi/)

## Google Auth API

**Location:** `shared/apis/googleAuthV2`

**Use cases:** Get a token to authorize a user towards Google

??? info "How to use outside of React"
We export an instance of the GoogleAuthAPI that can be
called asynchronously from outside of the React tree,
for example within an API class.

    ```javascript
    import { googleAuth } from 'shared/apis/googleAuthV2';

    const callSomeApi = async () => {
      try {
        const token = await googleAuth.getAccessToken(['cloud-platform']);
        const headers = { Authorization: `Bearer ${token}` };
        const data = await axios.get(url, { headers });
      } catch (error) {}
    }

    ```

!!! note
If you want to learn more about how Auth in general is handled in Backstage,
read [this](https://backstage.spotify.net/docs/backstage/auth)

**Example:**

```javascript
import React, { FC } from "react";

// Components needs to be wrapped in GoogleAuthBarrier
import { GoogleAuthBarrier } from "shared/apis/googleAuthV2";
import MyComponent from "./MyComponent";

const MyPage: FC<{}> = () => {
  return (
    // The barrier takes an optional prop of required scopes
    <GoogleAuthBarrier scope={["cloud-platform"]}>
      <MyComponent />
    </GoogleAuthBarrier>
  );
};
```

```javascript
import React, { FC, useEffect, useState } from "react";
import axios from "axios";

// Import the hook
import { useGetGoogleAccessToken } from "shared/apis/googleAuthV2";

const MyComponent: FC<{}> = () => {
  const [data, setData] = useState(undefined);
  // This hook returns a getter for the access token
  const getAccessToken = useGetGoogleAccessToken();

  useEffect(() => {
    // Get the token
    const headers = { Authorization: `Bearer ${getAccessToken()}` };
    axios
      // Call some endpoint that requires it
      .get(url, { headers })
      .then(data => {
        setData({ data });
      })
      .catch(() => {});
  }, [getAccessToken]);

  return <span>{data}</span>;
};
```

!!! note
There's also an `useGetGoogleIdToken` hook if you need an id token instead

For more information see the complete API documentation [here](https://backstage.spotify.net/docs/backstage-frontend/api-references/googleAuthApiToken/)
