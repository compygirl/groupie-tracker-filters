package groupieTrecker

import (
	"errors"
	"math"
	"strconv"
	"strings"

	data "groupieTrecker/internal/data"
	models "groupieTrecker/internal/models"
)

func isInArray(arr []string, i int) (bool, error) {
	for _, v := range arr {
		numVal, err := strconv.Atoi(v)
		if err != nil {
			return false, errors.New(v + err.Error())
		} else if numVal == i {
			return true, nil
		}
	}
	return false, nil
}

// we should format locations(capitalize them and replace "_" by " ")
func SearchSuggestions(searchTerm string, strRangeVal1 string, strRangeVal2 string, chekedMembersNumsStr string, firstAlbumDate string, country string, city string) ([]string, map[int]string, error) {
	// fmt.Println("DATE: ", firstAlbumDate)
	var artistsList []models.Artist

	chekedMembersNumsArray := strings.Split(chekedMembersNumsStr, ",")
	// fmt.Println(searchTerm,maxRangeVal,len(chekedMembersNumsArray),chekedMembersNumsStr)
	if chekedMembersNumsArray[0] == "" {
		for _, artist := range data.ArtistsList {
			artistsList = append(artistsList, artist)
		}
	} else {
		for _, artist := range data.ArtistsList {
			membersNumFlag, err := isInArray(chekedMembersNumsArray, len(artist.Members))
			if err != nil {
				return nil, nil, err
			}
			if membersNumFlag {
				artistsList = append(artistsList, artist)
			}
		}
	}
	// fmt.Println("First: ", artistsList)

	if firstAlbumDate != "" {
		for i := 0; i < len(artistsList); i++ {
			if !strings.Contains(artistsList[i].FirstAlbum, firstAlbumDate) { // first album date e.g. "01-01-2012"
				artistsList = append(artistsList[:i], artistsList[i+1:]...)
				i--
			}
		}
	}
	// fmt.Println("COUNTRY: ", country, "SIZE: ", len(artistsList))
	var found bool
	if country != "" {
		// fmt.Println("INSIDE")
		for i := 0; i < len(artistsList); i++ {
			found = false

			// fmt.Println("INSIDE2222")
			for countryy, _ := range artistsList[i].DatesLocation {
				// fmt.Println("INSIDEssss")
				if strings.Contains(country, countryy) {
					found = true
					// artistsList = append(artistsList[:i], artistsList[i+1:]...)
					// i--
				}
			}
			if !found {
				artistsList = append(artistsList[:i], artistsList[i+1:]...)
				i--
			}
		}
	}

	if city != "" {
		for i := 0; i < len(artistsList); i++ {
			found = false
			for countryy, _ := range artistsList[i].DatesLocation {
				for cityy, _ := range artistsList[i].DatesLocation[countryy] {
					if strings.Contains(city, cityy) {
						found = true
					}
				}
			}
			if !found {
				artistsList = append(artistsList[:i], artistsList[i+1:]...)
				i--
			}
		}
	}

	// fmt.Println("First: ", artistsList)
	set := make(map[int]string, 0)
	suggestions := make([]string, 0) // change to map for unique searchTems [maybe?]
	// here we should create another map for unique bands [done!]
	for _, artist := range artistsList {

		rangeVal1, _ := strconv.Atoi(strRangeVal1)
		rangeVal2, _ := strconv.Atoi(strRangeVal2)
		max := math.Max(float64(rangeVal1), float64(rangeVal2))
		min := math.Min(float64(rangeVal1), float64(rangeVal2))
		if float64(artist.CreationDate) > max || float64(artist.CreationDate) < min {
			continue
		} else {
			if strings.Contains(strings.ToLower(artist.Name), strings.ToLower(searchTerm)) {
				suggestions = append(suggestions, artist.Name+"- band/artist")
				set[artist.Id] = artist.Name
			}

			for _, member := range artist.Members {
				if strings.Contains(strings.ToLower(member), strings.ToLower(searchTerm)) {
					suggestions = append(suggestions, member+"- member "+artist.Name)
					set[artist.Id] = artist.Name
				}
			}

			creationDate := strconv.Itoa(artist.CreationDate)
			if strings.Contains(creationDate, searchTerm) {
				suggestions = append(suggestions, creationDate+"- creationDate")
				set[artist.Id] = artist.Name
			}

			// if searchTerm != "" && firstAlbumDate !=

			for country, valMap := range artist.DatesLocation {
				if strings.Contains(strings.ToLower(country), strings.ToLower(searchTerm)) {
					suggestions = append(suggestions, country+"- country "+artist.Name)
					set[artist.Id] = artist.Name
				}
				for city, dates := range valMap {
					if strings.Contains(strings.ToLower(city), strings.ToLower(searchTerm)) {
						suggestions = append(suggestions, city+"- city "+artist.Name)
						set[artist.Id] = artist.Name
					}
					for _, date := range dates {
						if strings.Contains(date, strings.ToLower(searchTerm)) {
							suggestions = append(suggestions, date+"- date "+artist.Name)
							set[artist.Id] = artist.Name
						}
					}
				}
			}
		}
	}

	// fmt.Println("++++++++++", suggestions, "-------")
	return suggestions, set, nil
}
