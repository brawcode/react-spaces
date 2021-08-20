# React Spaces


A fork of the excellent UI library [React Spaces](https://github.com/aeagle/react-spaces) by [Allan Eagle](https://github.com/aeagle).

&nbsp;
<img src="https://www.allaneagle.com/react-spaces/react-spaces-demo.gif" width="100%" />
&nbsp;
---

## The Goal

This fork aims to add additional functionality to the original project that does not fit with the vision the author had. It is stated that `react-spaces` is a **resuable foundation** to build UI layouts. This means specific functionality that I find useful might not be for everyone, but for the people that want it, then it's available.

I would like to point out I highly suggest you support the original author. I spent a lot of time trying to find something as well engineered as this. I have kept the donation links in this readme which can be found at the bottom.

The documentation provided by this repo is a superset of the original documentation until a point this repository strays far enough away.

&nbsp;  

## Documentation

Please see the [Original Repo](https://github.com/aeagle/react-spaces) for documentation regarding the base components.

To view the Storybook for this repo with the additional components, [please go here](https://react-spaces.brawcode.com/)

&nbsp;

## Components

**\<PersisentLayout /\>**

Wrap around your layout and pass a unique name, then give each resizable component a unique identifier to persist the layout to local storage

```jsx
<PersistentLayout name="my-layout">
  <ViewPort>
    {/* Size now acts as an initial value */}
    <LeftResizable i="area-a" size="20%" /> 
    <Fill />
    {/* Size now acts as an initial value */}
    <RightResizable  i="area-b" size="20%" />
  </ViewPort>
</PersistentLayout>

```

&nbsp;

## Getting started

To get started with React Spaces you need:

```typescript
npm install @brawcode/react-spaces --save
```

```typescript
import * as Spaces from "react-spaces";
```
&nbsp;

## Donation

Please support the author, [Allan Eagle](https://github.com/aeagle):

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AAYPWGUQBUDAA" 
    title="If you find this library useful, consider making a small donation to fund a cup of coffee" alt="Make Donation" style="text-decoration: none;">
<img src="https://www.allaneagle.com/donation.png" />
</a>
