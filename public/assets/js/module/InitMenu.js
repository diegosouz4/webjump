import Api from"./api.js";export default function InitMenu(){Api("http://localhost:8888/api/V1/categories/list",montaMenu)}export function AtualizaMenuAside(){Api("http://localhost:8888/api/V1/categories/list",montaMenuAside)}function montaMenu(t){t.items.forEach((function(t){criaLi(t)}))}function montaMenuAside(t){t.items.forEach((function(t){criaLi(t,"aside")}))}function criaLi(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"principal",n="[data-menu=".concat(a,"]"),i=document.querySelectorAll(n);i&&i.forEach((function(a){var n=Array.from(a.querySelectorAll("li")).pop(),i=document.createElement("li");i.innerHTML='<a data-link data-pageid="'.concat(t.id,'" href="./').concat(t.path,'.html" title="').concat(t.name,'">').concat(t.name,"</a>"),a.append(i),n&&a.append(n)}))}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9pbml0TWVudS5qcyJdLCJuYW1lcyI6WyJBcGkiLCJJbml0TWVudSIsIm1vbnRhTWVudSIsIkF0dWFsaXphTWVudUFzaWRlIiwibW9udGFNZW51QXNpZGUiLCJqc29uIiwiaXRlbXMiLCJmb3JFYWNoIiwiZWwiLCJjcmlhTGkiLCJpdGVtIiwicG9zaWNhbyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInBvc2ljYW9NZW51IiwiY29uY2F0IiwidWxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidWwiLCJ1bHRpbWFMaSIsIkFycmF5IiwiZnJvbSIsInBvcCIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImlkIiwicGF0aCIsIm5hbWUiLCJhcHBlbmQiXSwibWFwcGluZ3MiOiJPQUFPQSxRQUFTLDBCQUVELFNBQVNDLFdBRXRCRCxJQURhLCtDQUNERSxrQkFHUCxTQUFTQyxvQkFFZEgsSUFEYSwrQ0FDREksZ0JBR2QsU0FBU0YsVUFBVUcsR0FDRkEsRUFDTkMsTUFBTUMsU0FBUSxTQUFDQyxHQUN0QkMsT0FBT0QsTUFJWCxTQUFTSixlQUFlQyxHQUNQQSxFQUNOQyxNQUFNQyxTQUFRLFNBQUNDLEdBQ3RCQyxPQUFPRCxFQUFJLFlBSWYsU0FBU0MsT0FBT0MsR0FBNkIsSUFBdkJDLEVBQXVCQyxVQUFBQyxPQUFBLFFBQUFDLElBQUFGLFVBQUEsR0FBQUEsVUFBQSxHQUFiLFlBQ3hCRyxFQUFXLGNBQUFDLE9BQWlCTCxFQUFqQixLQUNYTSxFQUFNQyxTQUFTQyxpQkFBaUJKLEdBRWpDRSxHQUVMQSxFQUFJVixTQUFRLFNBQUNhLEdBQ1gsSUFBTUMsRUFBV0MsTUFBTUMsS0FBS0gsRUFBR0QsaUJBQWlCLE9BQU9LLE1BQ2pEQyxFQUFLUCxTQUFTUSxjQUFjLE1BQ2xDRCxFQUFHRSxVQUFILDZCQUFBWCxPQUE0Q04sRUFBS2tCLEdBQWpELGNBQUFaLE9BQWdFTixFQUFLbUIsS0FBckUsa0JBQUFiLE9BQTBGTixFQUFLb0IsS0FBL0YsTUFBQWQsT0FBd0dOLEVBQUtvQixLQUE3RyxRQUNBVixFQUFHVyxPQUFPTixHQUNOSixHQUFVRCxFQUFHVyxPQUFPViIsImZpbGUiOiJtb2R1bGUvaW5pdE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBpIGZyb20gXCIuL2FwaS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5pdE1lbnUoKSB7XHJcbiAgbGV0IHVybEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2FwaS9WMS9jYXRlZ29yaWVzL2xpc3RcIjtcclxuICBBcGkodXJsQVBJLCBtb250YU1lbnUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXR1YWxpemFNZW51QXNpZGUoKSB7XHJcbiAgbGV0IHVybEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2FwaS9WMS9jYXRlZ29yaWVzL2xpc3RcIjtcclxuICBBcGkodXJsQVBJLCBtb250YU1lbnVBc2lkZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vbnRhTWVudShqc29uKSB7XHJcbiAgbGV0IGRhZG9zQXBpID0ganNvbjtcclxuICBkYWRvc0FwaS5pdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgY3JpYUxpKGVsKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9udGFNZW51QXNpZGUoanNvbikge1xyXG4gIGxldCBkYWRvc0FwaSA9IGpzb247XHJcbiAgZGFkb3NBcGkuaXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGNyaWFMaShlbCwgXCJhc2lkZVwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JpYUxpKGl0ZW0sIHBvc2ljYW8gPSBcInByaW5jaXBhbFwiKSB7XHJcbiAgY29uc3QgcG9zaWNhb01lbnUgPSBgW2RhdGEtbWVudT0ke3Bvc2ljYW99XWA7XHJcbiAgY29uc3QgdWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwb3NpY2FvTWVudSk7XHJcblxyXG4gIGlmICghdWxzKSByZXR1cm47XHJcblxyXG4gIHVscy5mb3JFYWNoKCh1bCkgPT4ge1xyXG4gICAgY29uc3QgdWx0aW1hTGkgPSBBcnJheS5mcm9tKHVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKSkucG9wKCk7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpLmlubmVySFRNTCA9IGA8YSBkYXRhLWxpbmsgZGF0YS1wYWdlaWQ9XCIke2l0ZW0uaWR9XCIgaHJlZj1cIi4vJHtpdGVtLnBhdGh9Lmh0bWxcIiB0aXRsZT1cIiR7aXRlbS5uYW1lfVwiPiR7aXRlbS5uYW1lfTwvYT5gO1xyXG4gICAgdWwuYXBwZW5kKGxpKTtcclxuICAgIGlmICh1bHRpbWFMaSkgdWwuYXBwZW5kKHVsdGltYUxpKTtcclxuICB9KTtcclxufVxyXG4iXX0=
