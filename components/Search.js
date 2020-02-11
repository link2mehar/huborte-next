import React from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import styled, { keyframes } from 'styled-components';


const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;

`;

const DropDownItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  background: ${props => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  
  img {
    margin-right: 10px;
  }
`;



const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;

   
  }
`;

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(where: { OR: [{ title_contains: $searchTerm }, { description_contains: $searchTerm }] }) {
      id
      image
      title
      slug
    }
  }
`;

function routeToItem(item) {

  Router.push('/p/[pid]', `/p/${item.slug}`, {shallow: true})
  // Router.push({
  //   pathname: `/p/${item.slug}`,
    
  // });
}

class AutoComplete extends React.Component {
  state = {
    items: [],
    loading: false,
  };
  onChange = debounce(async (e, client) => {
    console.log('Searching...');
    // turn loading on
    this.setState({ loading: true });
    // Manually query apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value },
    });
    this.setState({
      items: res.data.items,
      loading: false,
    });
  }, 350);
  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift onChange={routeToItem} itemToString={item => (item === null ? '' : item.title)}>
          {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <input className="search-field" placeholder="I'm shopping for..."
                    {...getInputProps({
                      type: 'search',
                      
                      id: 'search',
                      className: `search-field ${this.state.loading ? 'loading' : ''}` ,
                      onChange: e => {
                        e.persist();
                        this.onChange(e, client);
                      },
                    })}
                  />
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {this.state.items.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <img width="50" src={item.image} alt={item.title} />
                      {item.title}
                    </DropDownItem>
                  ))}
                  {!this.state.items.length &&
                    !this.state.loading && <DropDownItem> Nothing Found {inputValue}</DropDownItem>}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default AutoComplete;