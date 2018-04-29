/* eslint class-methods-use-this:
  ["error", { "exceptMethods": ["handleSearch", "optionRenderer"] }]
*/

import React, { Component } from 'react';
import Select from 'react-select';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import searchService from '../services/search';
import { fetchCourse } from '../actions/courseActions';

@connect(store => ({
  user: store.auth.user,
}))
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.isLoadingExternally = true;
    this.query = '';
    this.handleSearch = this.handleSearch.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.optionRenderer = this.optionRenderer.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    this.props.dispatch(fetchCourse(e.courseNumber));
    this.props.history.push(`/courses/${e.courseNumber}`);
  }

  onInputChange(inputValue) {
    this.setState({ query: inputValue });
  }

  optionRenderer(option) {
    return (
      <Highlighter
        highlightStyle={{ fontWeight: 'bold' }}
        searchWords={[this.state.query]}
        textToHighlight={`${option.courseNumber} - ${option.name}`}
      />
    );
  }

  async handleSearch(query) {
    const res = await searchService.get(query);
    return { options: res };
  }

  render() {
    const ignoreAccents = true;
    const ignoreCase = true;

    return (
      <Select.Async
        name="form-field-name"
        autoload={false}
        loadOptions={this.handleSearch}
        filterOption={a => a}
        isLoading={this.isLoadingExternally}
        onChange={this.onSelect}
        onInputChange={this.onInputChange}
        placeholder="Search"
        ignoreAccents={ignoreAccents}
        ignoreCase={ignoreCase}
        noResultsText="No results found"
        optionRenderer={this.optionRenderer}
        labelKey="courseNumber"
        valueKey="courseNumber"
      />
    );
  }
}

export default withRouter(SearchBar);
