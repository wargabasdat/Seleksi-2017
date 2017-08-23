import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Segment } from 'semantic-ui-react';
import { range } from 'lodash';

class Pagination extends React.Component {
  constructor (props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount () {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.page);
    }
  }

  componentDidUpdate (prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.page);
    }
  }

  setPage (page) {
    let items = this.props.items;
    let pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, parseInt(page, 10));

    // get new page of items from items array
    let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager: pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager (totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    if (currentPage > totalPages) {
      currentPage = 1;
    }

    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render () {
    let pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
      return null;
    }

    return (
      <Segment inverted>
        <Menu borderless stackable pointing inverted fluid width={3}>
          <Menu.Menu position='left'>
            <Menu.Item name='First' disabled={pager.currentPage === 1} active={pager.currentPage === 1} onClick={() => this.setPage(1)} link as={Link} to={this.props.urlParent} />
            <Menu.Item name='Previous' disabled={pager.currentPage === 1} active={pager.currentPage === 1} onClick={() => this.setPage(pager.currentPage - 1)} link as={Link} to={pager.currentPage === 1 ? this.props.urlParent : (this.props.urlParent + ('?page=' + pager.currentPage - 1))} />
          </Menu.Menu>
          {pager.pages.map((page, index) =>
            <Menu.Item name={page.toString()} key={index} disabled={pager.currentPage === page} active={pager.currentPage === page} onClick={() => this.setPage(page)} link as={Link} to={this.props.urlParent + '?page=' + page.toString()} />
              )}
          <Menu.Menu position='right'>
            <Menu.Item name='Next' disabled={pager.currentPage === pager.totalPages} active={this.props.page === pager.totalPages} onClick={() => this.setPage(pager.currentPage + 1)} link as={Link} to={this.props.urlParent + ('?page=' + pager.currentPage + 1)} />
            <Menu.Item name='Last' disabled={pager.currentPage === pager.totalPage} active={this.props.page === pager.totalPages} onClick={() => this.setPage(pager.totalPages)} link as={Link} to={this.props.urlParent + '?page=' + pager.totalPages} />
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number
};

Pagination.defaultProps = {
  initialPage: 1
};

export default Pagination;
