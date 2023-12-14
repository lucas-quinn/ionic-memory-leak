# Stencil/Ionic Component Memory Leak

I have identified two types of memory leaks. The first type occurs in the development environment and is caused by components like `ion-button`. The second type is more complex, resulting from the combination of specific components. Although the exact combinations causing this issue are unknown, there are several instances of such combinations causing memory leaks.

Let's begin by discussing the memory leak in the development environment.

## The First Kind of Leaking

When rendering a component conditionally, certain components, such as `ion-button`, trigger a memory leak. If the component exists in a Stencil component and is rendered conditionally, the entire Stencil component fails to be garbage collected. For instance, wrapping `ion-button` in a Stencil component and rendering it conditionally prevents the garbage collection of the Stencil component.

While this type of leaking is limited to the development environment, distinguishing between development-only and production-related leaks is challenging. This ambiguity significantly impacts the development experience, requiring extensive time spent on debugging memory leaks. To determine whether a component is leaking, one must build and run the app in production mode, adding a considerable overhead to the debugging process.

Environment details:
- Ionic@latest


- React@latest: Perfectly clean
- Angular@latest: Perfectly clean
- Vue@latest: One element left in memory, but it cleans memory correctly
- Stencil@latest: Unable to perform garbage collection correctly, resulting in memory leaks

To reproduce the issue:
1. Run `npm install`.
2. Execute `npm run start`.
3. Click the button to observe the memory leak issue.

Replace `ion-button` with other components to observe the same issue:

- [ ] ion-action-sheet
- [ ] ion-accordion
- [ ] ion-accordion-group
- [ ] ion-alert
- [ ] ion-badge
- [ ] ion-breadcrumb
- [ ] ion-breadcrumbs
- [x] ion-button
- [ ] ion-ripple-effect
- [ ] ion-card
- [ ] ion-card-content
- [ ] ion-card-header
- [ ] ion-card-subtitle
- [ ] ion-card-title
- [ ] ion-checkbox
- [x] ion-chip
- [ ] ion-app
- [ ] ion-content
- [x] ion-datetime
- [x] ion-datetime-button
- [ ] ion-picker
- [ ] ion-fab
- [x] ion-fab-button
- [ ] ion-fab-list
- [ ] ion-grid
- [ ] ion-col
- [ ] ion-row
- [x] ion-infinite-scroll
- [ ] ion-infinite-scroll-content
- [ ] ion-icon
- [ ] ion-input
- [ ] ion-textarea
- [ ] ion-item
- [ ] ion-item-divider
- [ ] ion-item-group
- [ ] ion-item-sliding
- [ ] ion-item-options
- [x] ion-item-option
- [ ] ion-label
- [ ] ion-note
- [ ] ion-list
- [ ] ion-list-header
- [ ] ion-avatar
- [ ] ion-icon
- [ ] ion-img
- [ ] ion-thumbnail
- [ ] ion-menu
- [ ] ion-menu-button
- [ ] ion-menu-toggle
- [ ] ion-split-pane
- [ ] ion-modal
- [ ] ion-backdrop
- [ ] ion-nav
- [ ] ion-nav-link
- [ ] ion-router-outlet
- [ ] ion-route
- [ ] ion-route-redirect
- [x] ion-searchbar
- [ ] ion-segment
- [x] ion-segment-button
- [x] ion-select
- [x] ? ion-select-option with ion-select
- [ ] ion-tabs
- [x] ? ion-tab with ion-nav inside
- [x] ion-tab-bar
- [x] ion-tab-button
- [ ] ion-toast
- [ ] ion-toggle
- [ ] ion-toolbar
- [ ] ion-header
- [ ] ion-footer
- [ ] ion-title
- [x] ?ion-buttons (must have ion-button, so it has an issue)
- [ ] ion-back-button
- [ ] ion-text

## The Second Kind of Leaking

This type of leaking occurs in the production environment too, resulting from the combination of certain components. Though the specific combinations causing this issue are unidentified, instances like the reported issue [link](https://github.com/ionic-team/stencil/issues/3607) confirm its occurrence in production mode.

An example of reproducing leaking involves combining `ion-tabs` with `ion-nav` is offered in this repo, causing memory leaks in production mode. Individually, these components do not cause leaking in the development environment, making it challenging to identify the root cause.

As of now, there is no discernible pattern on how these combinations cause leaks, making it difficult to prevent them, adding significant complexity to debugging in a production build.

This pervasive memory leak issue undermines our confidence in using Stencil for production, as it leads to app crashes on both mobile and desktop platforms.

We kindly request marking this issue as a top priority and addressing it at the earliest convenience. Thank you for your prompt attention.