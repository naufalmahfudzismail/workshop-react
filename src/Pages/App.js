import React, { Component } from 'react';
import SearchBar from '../component/SearchBar';
import BlogList from '../component/BlogListing';

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


class App extends Component {
  constructor(){
    super()

    this.state = {

      loding : true,
      blogs : [],
      blogsFiltered : []
      
    }
  }

  // this method compiling when its start
  componentDidMount(){
    this.handleGetBlog()
  }
  // handling search event
  handleTypeSearch = event =>{

    // cari data sesuai dengan search filter
    const filteredBlogs = this.state.blogs.filter((blog) => { 
      return blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
    });

    this.setState( { blogsFiltered: filteredBlogs})

      console.log(event.target.value);
  }

  // take data from API JSON
  handleGetBlog = () =>{
    fetch(link)
    .then(res => res.json())
    .then(res => this.setState({blogs:res, blogsFiltered : res}))
  }

  render() {

    console.log(this.state.blogsFiltered)

    return (
      <div>
       <SearchBar  onChangeSearch = {this.handleTypeSearch}/>
       {this.state.blogsFiltered.map((blogs, index) =>

       <BlogList

          key  = {index}
          title = {blogs.title}
          content = {blogs.content}
          author = {blogs.author}
          date = {blogs.created_at}
    
       />
       )}
      </div>
      
    );
  }
}



export default App;
