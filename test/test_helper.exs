ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Formic.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Formic.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Formic.Repo)

