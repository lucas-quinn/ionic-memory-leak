# Stencil/Ionic Component Memory Leak

If we render a component conditionally, there will be a memory leak issue for some components.

If the component exists in a Stencil component, the whole Stencil component will not be garbage collected. For example, if we wrap `ion-button` in a Stencil component and render it conditionally, the Stencil component will not be garbage collected.

all use Ionic@latest

- [ ] React@latest: perfect clean
- [ ] Angular@latest: perfect clean
- [ ] Vue@latest: has one element left in memory, but it cleans memory correctly.
- [x] Stencil@latest: couldn't perform garbage collection correctly, resulting in memory leak.

To reproduce the issue:

1. Run `npm install`.
2. Then run `npm run start`.
3. Click the button to observe the memory leak issue.



In the following ionic component, even in dev environment, there is memory leak.
You can replace `ion-button` with other components to observe the same issue:

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