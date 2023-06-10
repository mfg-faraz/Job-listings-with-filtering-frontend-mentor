import './App.css';
import Main from './containers/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import data from "./data/data.json"
import JobSection from './components/JobSection/JobSection';
import Wrapper from './containers/Wrapper/Wrapper';
import { filter } from './utils/hepler';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [jobData, setJobData] = useState(data)
  const [searchTags, setSearchTags] = useState([])

  useEffect(() => {
    let arr = data
    searchTags.map((searchTag, i) => {
      arr = filter({ role: searchTag, level: searchTag, languages: searchTag, tools: searchTag }, arr)
    }
    )
    if (searchTags.length > 0) {
      setJobData(arr)
    }else{
      setJobData(data)
    }
  }, [searchTags])

  const clickHandler = (x) => {
    const check = searchTags.find(tag => tag === x)
    if (!check)
      setSearchTags(prev => [...prev, x])
  }

  const removeHandler = (x) => {
    const check = searchTags.find(tag => tag === x)
    if (check) {
      const tags = [...searchTags]
      console.log("Tags", tags, x);
      const index = tags.indexOf(x)

      tags.splice(index, 1)
      setSearchTags(tags)
    }
  }

  const clearHandler =()=>{
    setSearchTags([])
  }
  /* Render */
  return (
    <>
      <Main>
        <Header searchTags={searchTags} onRemove={removeHandler} onClear={clearHandler} />
        <Wrapper>
          {jobData?.map((job,i) => <JobSection key={i} job={job} onClick={clickHandler} />)}
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

export default App;
