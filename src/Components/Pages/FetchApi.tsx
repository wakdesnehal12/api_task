import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// interface IdProp{
//     id: string | undefined
// }

interface IProps{
    id: number,
    created_at: number | any,
    title: string | any,
    url: string | any,
    author: string
    // hits: []
    // result: any
}

type usePro = Array<IProps>

// interface ProVal{
//     value: any | number
// }

export default function FetchApi() {
    const [hits, setHits] = useState<usePro>([]);
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setcurrentPage] = useState(0)
    const [isLoaded, setisLoaded] = useState(true);
    // const [page, setPage] = useState<ProVal>([]);
    const [useId, setUseId] = useState( )

    const fetchURL = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${currentPage}`;
    const loadPost = () => {
        setInterval(async() => {
            await fetch(fetchURL)
            .then(res => res.json())     
            .then((result) => {
                setHits(
                       [ ...result.hits]
                    );
                    console.log(...result.hits)

                    setPageCount(result.nbPages);
                    setisLoaded(true);
                })
            .catch(error => console.error('Error', error));

            // setUseId(useId + 1);
            // setHits(setUseId);
    
        }, 2000)

    }

    useEffect(()=> {
        loadPost()
    }, [currentPage])

    const handlePageChange = (selectedObject:any) => {
		setcurrentPage(selectedObject.selected);
		loadPost();
	};
  return (
    <div>
        <h1>FetchApi</h1>
        <input 
            type='text'
            // onChange={(e) => setQuery(e.currentTarget.value)}
        />
       
        
        <table style={{border: 2, color: "red"}}>
            <tr>
                <th>Created_at</th>
                <th>Title</th>
                <th>url</th>
                <th>Author</th>
            </tr>

            {
                isLoaded ? (
                hits.map((item, id) => {
                    return(
                        <>
                            <tr key={id}>
                                <td><a>{item.created_at}</a></td>
                                <td><a>{item.title}</a></td>
                                <td><a>{item.url}</a></td>
                                <td>{item.author}</td>
                            </tr>
                        </>
                    )
                })
                
                ) : (
                    
                    <div></div>
                )
            }
        </table>

        <Stack spacing={2}>
            {
                isLoaded ? (
                    <Pagination 
                        count={pageCount} 
                        variant="outlined" 
                        color="primary"
                        onChange={handlePageChange}
                    // onChange={(event, value) => setPage(value)}
                    />  
                ) : (
                    <div>Nothing to Display</div>
                )
            }

        </Stack>
    </div>
  )
}
