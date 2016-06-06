defmodule Formic.Repo.Migrations.AddEmbeddedFields do
  use Ecto.Migration

  def change do
    alter table(:forms) do
      add :fields, :map
    end
  end
end
