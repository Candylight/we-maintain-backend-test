## PR Checklist
*Feel free to **remove** checks not applicable to this PR, for example your PR can't be both breaking AND not breaking at the same time*

### Global
- [ ] This PR does not introduce any breaking change
- [ ] This PR introduces breaking change(s) and has been labelled as such
- [ ] This PR is properly documented [1]
- [ ] This PR **works**. [2]

[Provide an explanation on how this PR works, how it has been tested (unit/integration tests, functionnal tests, sandboxes,...), feel free to add screenshots of desired output]

### GraphQL
*When any change is made to the public GraphQL Schema:*
- [ ] Schema manually tested and working
- [ ] All my public Fields / ObjectTypes are properly AND precisely described

### Database
*When any change is made to an entity:*
- [ ] Created migration via CLI from **staging** schema

## Reviewer Checklist

- [ ] **The reviewer has understood the functionnal requirements and verified that the code changes meet these requirements effectively**
- [ ] Comments has been adressed and suggested changes has been implemented by the author or at least discussed
- [ ] The test coverage of this PR has been improved or maintained with BOTH unit and integration tests
- [ ] The documentation of this PR has also been reviewed, is sufficient and is easily understandable