# ionic component memory leak

If we render a component conditionally, there will be a memory leak issue for some components.

If the compoent exists in a stencil component, the whole stencil component will not be garbage collected. For example, we wrap ion-button in a stencil component, and render it conditionally, the stencil component will not be garbage collected.

Ionic latest

- [ ] React@latest perfect clean

- [ ] Angular@latest perfect clean

- [ ] Vue@latest has one element left in memory, but it cleans memoery correctly.

- [x] Stencil@latest couldn't do garbage collection correctly, resulting in memeory leak.


`npm install`
then
`npm run start`
and click the button
to see the memory leak issue.

You can replace the `ion-button` with other components to see the same issue.

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
- [ ] ion-popover
- [ ] ion-loading
- [ ] ion-progress-bar
- [ ] ion-skeleton-text
- [ ] ion-spinner
- [ ] ion-radio
- [ ] ion-radio-group
- [ ] ion-range
- [ ] ion-refresher
- [x] ion-refresher-content
- [ ] ion-reorder
- [ ] ion-reorder-group
- [ ] ion-router
- [ ] ion-router-link
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
- [?] ion-buttons (must have ion-button, so it has an issue)
- [ ] ion-back-button
- [ ] ion-text
