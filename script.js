(() => {
  window.onload = () => {
    let tabsListEl = document.querySelector('[data-tabs] .tabs-selectors')

    if (tabsListEl) {
      tabsListEl = [...tabsListEl.children]

      tabsListEl.forEach((tabItemEl, index) => {
        tabItemEl.addEventListener('click', function(event) {
          // Reset the status for all tabs
          tabsListEl.forEach(tabsToCleanEl => {
            tabsToCleanEl.classList.remove('active')
            tabsToCleanEl.setAttribute('aria-selected', 'false')
          })

          // Set status for current tab
          const targetEl = event.target

          targetEl.classList.add('active')
          targetEl.setAttribute('aria-selected', 'true')

          // Show the tabpanel
          let tabPanelListEl = document.querySelector('[data-tabs] .tab-panels').children

          if (tabPanelListEl) {
            tabPanelListEl = [...tabPanelListEl]
          }

          tabPanelListEl.forEach( tabPanelEl => {
            tabPanelEl.classList.remove('active')
          })

          const tabPanelEl = tabPanelListEl[index]

          if(tabPanelEl) {
            tabPanelListEl[index].classList.add('active')
          }
        })
      })
    }
  }
})()
