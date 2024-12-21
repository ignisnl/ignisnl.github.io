import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { Route } from "./+types/marks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "UNSW Marks" },
    { name: "description", content: "Notable marks from my time at UNSW." },
  ];
}

export default function Marks() {
  return (
    <>
      <Typography variant="body1">
        I graduated from UNSW with a Bachelor of Science (Computer Science) in
        January 2025 with a <b>Distinction average</b> - <b>83.125 WAM</b>.
      </Typography>
      <Typography variant="h4" component="h2">
        Notable marks
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="notable marks table">
          <TableHead>
            <TableRow>
              <TableCell>Mark</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Handbook URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell>
                <b>83 DN</b>
              </TableCell>
              <TableCell>Programming Fundamentals</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP1511">
                  COMP1511
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>93 HD</b>
              </TableCell>
              <TableCell>Computer Systems Fundamentals</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP1521">
                  COMP1521
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>88 HD</b>
              </TableCell>
              <TableCell>Software Engineering Fundamentals</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP1531">
                  COMP1531
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>78 DN</b>
              </TableCell>
              <TableCell>Data Structures and Algorithms</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP2521">
                  COMP2521
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>86 HD</b>
              </TableCell>
              <TableCell>Algorithms and Programming Techniques</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2022/COMP3121">
                  COMP3121
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>89 HD</b>
              </TableCell>
              <TableCell>Computer Networks and Applications</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2022/COMP3331">
                  COMP3331
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>84 DN</b>
              </TableCell>
              <TableCell>Software Construction: Techniques and Tools</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2022/COMP2041">
                  COMP2041
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>96 HD</b>
              </TableCell>
              <TableCell>(In-)Formal Methods: The Lost Art</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2022/COMP6721">
                  COMP6721
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>93 HD</b>
              </TableCell>
              <TableCell>Database Systems</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2022/COMP3311">
                  COMP3311
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>76 DN</b>
              </TableCell>
              <TableCell>Object-Oriented Design & Programming</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2023/COMP2511">
                  COMP2511
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>84 DN</b>
              </TableCell>
              <TableCell>Software System Design and Implementation</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2023/COMP3141">
                  COMP3141
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>82 DN</b>
              </TableCell>
              <TableCell>Concepts of Programming Languages</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2023/COMP3161">
                  COMP3161
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>85 HD</b>
              </TableCell>
              <TableCell>
                Professional Issues and Ethics in Information Technology
              </TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2023/COMP4920">
                  COMP4920
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>83 DN</b>
              </TableCell>
              <TableCell>Operating Systems</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2024/COMP3231">
                  COMP3231
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>79 DN</b>
              </TableCell>
              <TableCell>Web Front-End Programming</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2024/COMP6080">
                  COMP6080
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>89 HD</b>
              </TableCell>
              <TableCell>Computer Science Project</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2024/COMP3900">
                  COMP3900
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>80 DN</b>
              </TableCell>
              <TableCell>Advanced C++ Programming</TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2024/COMP6771">
                  COMP6771
                </a>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <b>76 DN</b>
              </TableCell>
              <TableCell>
                Solving Modern Programming Problems with Rust
              </TableCell>
              <TableCell>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2024/COMP6991">
                  COMP6991
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
