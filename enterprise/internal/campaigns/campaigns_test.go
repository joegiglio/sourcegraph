package campaigns

import (
	"context"
	"fmt"
	"strings"
	"testing"
	"time"

	"github.com/sourcegraph/sourcegraph/cmd/frontend/types"
	"github.com/sourcegraph/sourcegraph/internal/api"
	"github.com/sourcegraph/sourcegraph/internal/db"
	"github.com/sourcegraph/sourcegraph/internal/db/dbtesting"
	"github.com/sourcegraph/sourcegraph/internal/extsvc"
)

func testRepo(t *testing.T, store *db.ExternalServiceStore, serviceKind string) *types.Repo {
	t.Helper()

	clock := dbtesting.NewFakeClock(time.Now(), 0)
	now := clock.Now()

	svc := types.ExternalService{
		Kind:        serviceKind,
		DisplayName: serviceKind + " - Test",
		Config:      `{"url": "https://github.com"}`,
		CreatedAt:   now,
		UpdatedAt:   now,
	}

	// create a few external services
	if err := store.Upsert(context.Background(), &svc); err != nil {
		t.Fatalf("failed to insert external services: %v", err)
	}

	return &types.Repo{
		Name: api.RepoName(fmt.Sprintf("repo-%d", svc.ID)),
		ExternalRepo: api.ExternalRepoSpec{
			ID:          fmt.Sprintf("external-id-%d", svc.ID),
			ServiceType: extsvc.KindToType(serviceKind),
			ServiceID:   fmt.Sprintf("https://%s.com/", strings.ToLower(serviceKind)),
		},
		RepoFields: &types.RepoFields{
			URI: fmt.Sprintf("repo-%d", svc.ID),
			Sources: map[string]*types.SourceInfo{
				svc.URN(): {
					ID:       svc.URN(),
					CloneURL: "https://secrettoken@github.com/sourcegraph/sourcegraph",
				},
			},
		},
	}
}
