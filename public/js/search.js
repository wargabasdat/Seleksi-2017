const search = instantsearch({
	appId: '1EF1KBTKXD',
	apiKey: '4e6880261b3ac18878937a6bc20e3eb1',
	indexName: 'musics',
	urlSync: true,
	searchFunction(helper) {
	if (helper.state.query === '') {
	  return;
	}

	helper.search();
	}
});
// initialize RefinementList
search.addWidget(
  instantsearch.widgets.refinementList({
  container: '#refinement-list',
  attributeName: 'vendor'
  })
);


// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
  container: '#search-box',
  poweredBy: true,
  reset:true,
  placeholder: 'Find out your musics!'
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats-container'
  })
);

// initialize Pagination
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination-container',
    maxPages: 20,
    // default is to scroll to 'body', here we disable this behavior
    scrollTo: false,
    showFirstLast: false,
  })
);

// initialize Hits
search.addWidget(
  instantsearch.widgets.hits({
  container: '#hits',
  templates: {
    empty: 'Oops! Your music not in list.',
    item: '<img src="{{ image_url }}" style="height:20px;width:20px;">  &ensp;<strong>{{ title }}</strong> <br>  {{ artist}}  |  <em>{{vendor}}</em> <br><br>'
    },
  escapeHits: true,
  })
);

search.start();