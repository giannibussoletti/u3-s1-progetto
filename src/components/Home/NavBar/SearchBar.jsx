import { Button, Col, Form, Row } from "react-bootstrap"
import NavBarSearch from "./NavBarSearch"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchBar = (props) => {
  const [search, setSearch] = useState("")
  const [searchResults, setResults] = useState()

  const multiLink = `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1`

  const searchMulti = () => {
    fetch(multiLink, props.options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          console.log(response)
          throw new Error(response.status)
        }
      })
      .then((data) => {
        const filteredResults = data.results.filter((person) => person.media_type !== "person")
        setResults(filteredResults)
      })
      .catch((err) => err)
  }

  return (
    <Form
      className="position-relative ms-auto me-auto"
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          e.preventDefault()
          searchMulti()
          setSearch("")
        }
      }}>
      <Row className=" align-items-center border-0 border rounded-3">
        <Col xs="auto" className="px-0">
          <Form.Control
            type="text"
            placeholder="Cosa ti va di guardare?"
            value={search}
            className="mr-sm-2 border-0 rounded-start-3 rounded-end-0"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </Col>
        <Col className="p-0">
          <Button
            className="rounded-start-0 bg-dark border-0 border-start border-2"
            onClick={(e) => {
              e.preventDefault()
              searchMulti()
              setSearch("")
            }}>
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              style={{ color: "rgb(255, 255, 255)" }}
            />
          </Button>
        </Col>
      </Row>
      {searchResults ? (
        <Row className="position-absolute bg-black flex-grow-1 p-3" id="searchMenu">
          {searchResults.slice(0, 5).map((result) => {
            console.log(result.release_date)
            return (
              <NavBarSearch
                key={result.id}
                poster={result.poster_path}
                mediaType={result.media_type}
                year={
                  result.release_date
                    ? result.release_date.slice(0, 4)
                    : result.first_air_date.slice(0, 4)
                }
                titleMovie={result.title}
                titleSeries={result.name}
                id={result.id}
              />
            )
          })}
        </Row>
      ) : (
        <div style={{ width: "0", height: "0" }}></div>
      )}
    </Form>
  )
}
export default SearchBar
